import { getNameInitials } from "@/utilities";
import { Avatar as Antdavatar, AvatarProps } from "antd"


 type Props = AvatarProps & {
    name?: string;
}

const Customavatar = ( { name , style , ...rest  }: Props)  => {
  return (
    <Antdavatar
        alt={name}
        size='small'
        style={
            {
                background : '#87d068',
                display : 'flex',
                alignItems : 'center',
                border : 'none',
                ...style
            }
          
        } 
        {...rest}
    >

      {getNameInitials(name || '')}
    </Antdavatar>
  )
}

export default Customavatar
