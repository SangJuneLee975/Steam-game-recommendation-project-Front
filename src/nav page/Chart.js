import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message, Typography } from 'antd';
import axiosInstance from '../api/axiosInstance';
import { getUserInfoFromToken } from '../components/parsejwt';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Box } from '@mui/material';

const Chart = () => {
  const navigate = useNavigate();
  const [hasSteamId, setHasSteamId] = useState(false);
  const [recentlyPlayedGames, setRecentlyPlayedGames] = useState([]);

  useEffect(() => {
    const checkSteamLink = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          navigate('/login');
          return;
        }

        const userInfo = getUserInfoFromToken(token);
        if (userInfo && userInfo.steamId) {
          setHasSteamId(true);
          fetchRecentlyPlayedGames(userInfo.steamId);
        } else {
          setHasSteamId(true);
          message.warning('스팀 계정을 연동해 주세요.');
        }
      } catch (error) {
        console.error('Failed to check steam link:', error);
        message.error('오류가 발생했습니다. 다시 시도해주세요.');
        navigate('/login');
      }
    };

    const fetchRecentlyPlayedGames = async (steamId) => {
      try {
        const response = await axiosInstance.get(`/steam/recentlyPlayedGames`, {
          params: { steamId },
        });
        const gamesInMinutes = response.data.response.games.map((game) => ({
          ...game,
          playtime_2weeks: game.playtime_2weeks / 60,
        }));
        setRecentlyPlayedGames(gamesInMinutes);
      } catch (error) {
        console.error('Error fetching games:', error);
        message.error('게임 데이터를 가져오는 중 오류가 발생했습니다.');
      }
    };

    checkSteamLink();
  }, [navigate]);

  if (!hasSteamId) {
    return <div>Loading...</div>;
  }

  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n - 1) + '...' : str;
  };

  const sortedGames = recentlyPlayedGames.sort(
    (a, b) => b.playtime_2weeks - a.playtime_2weeks
  );

  const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#A28EEC',
    '#82CA9D',
    '#8884D8',
    '#8DD1E1',
    '#83A6ED',
    '#8B5CF6',
    '#D88A4B',
    '#A4DE6C',
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <main
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: "url('../images/Chart_background.PNG')",

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        <Typography.Title
          level={4}
          style={{
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          최근 2주 동안 플레이한 게임
        </Typography.Title>
        <Box>
          <ResponsiveContainer width="100%" height={1000}>
            <PieChart>
              <Pie
                data={sortedGames.slice(0, 12)}
                dataKey="playtime_2weeks"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={400}
                fill="#8884d8"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {sortedGames.slice(0, 12).map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} 시간`} />
              <Legend wrapperStyle={{ fontSize: '30px' }} />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </div>
    </main>
  );
};

export default Chart;
