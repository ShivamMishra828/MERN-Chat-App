import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes'

const Message = () => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
            {Chat_History.map((el) => {
                switch(el.type){
                    case "divider":
                        // Timeline
                        return <Timeline el={el} />
                    
                    case "msg":
                        switch(el.subtype){
                            case "img":
                                // Img Msg
                                return <MediaMsg el={el} />

                            case "doc":
                                // Doc Msg
                                return <DocMsg el={el} />

                            case "link":
                                // Link Msg
                                return <LinkMsg el={el} />

                            case "reply":
                                // Reply Msg
                                return <ReplyMsg el={el} />

                            default:
                                // Text Msg
                                return <TextMsg el={el} />
                        }
                    
                    default:
                        return <></>;
                }
            })}
        </Stack>
    </Box>
  )
}

export default Message;