import { ChannelCard, VideoCard } from './'

import { Stack, Box } from '@mui/material'

const Videos = ({ videos }) => {
  return (
    console.log(videos)
    
    // <div>
      
    //   <Stack
    //     direction="row" 
    //     flexWrap="wrap"
    //     justifyContent="start"
    //     gap={2}
    //   >
    //     {videos.map((item, idx) => (
    //       <Box key={idx}>
    //         {item.id.videoId && <VideoCard video={item} />}
    //         {item.id.channelId && <ChannelCard channelDetail={item} />}
    //       </Box>
    //     ))}
    //   </Stack>
    // </div>
  )
}


export default Videos