import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  // {
  //   icon: <SettingsSuggestRoundedIcon />,
  //   title: '탁월한 사용자 경험',
  //   description: '직관적이고 사용하기 쉬운 인터페이스를 경험해 보세요.',
  // },
  // {
  //   icon: <ConstructionRoundedIcon />,
  //   title: 'Built to last',
  //   description:
  //     'Experience unmatched durability that goes above and beyond with lasting investment.',
  // },
  // {
  //   icon: <ThumbUpAltRoundedIcon />,
  //   title: 'Great user experience',
  //   description:
  //     'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  // },
];

export default function Highlights1() {
  // return (
  //   <Box
  //     id="highlights"
  //     sx={{
  //       pt: { xs: 4, sm: 12 },
  //       pb: { xs: 8, sm: 16 },
  //       color: 'white',
  //       bgcolor: '#06090a',
  //     }}
  //   >
  //     <Container
  //       sx={{
  //         position: 'relative',
  //         display: 'flex',
  //         flexDirection: 'column',
  //         alignItems: 'center',
  //         gap: { xs: 3, sm: 6 },
  //       }}
  //     >
  //       <Box
  //         sx={{
  //           width: { sm: '100%', md: '60%' },
  //           textAlign: { sm: 'left', md: 'center' },
  //         }}
  //       >
  //         <Typography component="h2" variant="h4">
  //           Highlights
  //         </Typography>
  //         <Typography variant="body1" sx={{ color: 'grey.400' }}>
  //           ..
  //         </Typography>
  //       </Box>
  //       <Grid container spacing={2.5}>
  //         {items.map((item, index) => (
  //           <Grid item xs={12} sm={6} md={4} key={index}>
  //             <Stack
  //               direction="column"
  //               color="inherit"
  //               component={Card}
  //               spacing={1}
  //               useFlexGap
  //               sx={{
  //                 p: 3,
  //                 height: '100%',
  //                 border: '1px solid',
  //                 borderColor: 'grey.800',
  //                 background: 'transparent',
  //                 backgroundColor: 'grey.900',
  //               }}
  //             >
  //               <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
  //               <div>
  //                 <Typography fontWeight="medium" gutterBottom>
  //                   {item.title}
  //                 </Typography>
  //                 <Typography variant="body2" sx={{ color: 'grey.400' }}>
  //                   {item.description}
  //                 </Typography>
  //               </div>
  //             </Stack>
  //           </Grid>
  //         ))}
  //       </Grid>
  //     </Container>
  //   </Box>
  // );
}
