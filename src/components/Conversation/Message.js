import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes'

const Message = ({menu}) => {
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
                                return <MediaMsg el={el} menu={menu} />

                            case "doc":
                                // Doc Msg
                                return <DocMsg el={el} menu={menu} />

                            case "link":
                                // Link Msg
                                return <LinkMsg el={el} menu={menu} />

                            case "reply":
                                // Reply Msg
                                return <ReplyMsg el={el} menu={menu} />

                            default:
                                // Text Msg
                                return <TextMsg el={el} menu={menu} />
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