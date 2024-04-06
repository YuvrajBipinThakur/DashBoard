import { Avatar as Antdavatar, AvatarProps } from "antd"


 type Props = AvatarProps & {
    name: string;
}

const Customavatar = ( { name , style , ...rest  }: Props)  => {
  return (
    <Antdavatar
        alt="Yuvraj Thakur"
        size='small'
        style={
            {
                background : '#87d068',
                display : 'flex',
                alignItems : 'center',
                border : 'none',
            }
        }
    >

      {name}
    </Antdavatar>
  )
}

export default Customavatar
