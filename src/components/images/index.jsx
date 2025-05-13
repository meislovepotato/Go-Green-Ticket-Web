import Image from 'next/image'

import GoGreenTicket from '../../assets/GoGreenTicket.png'

export const GoGreenTicketLogo = ({ width, height }) => (
  <Image src={GoGreenTicket} alt='GoGreenTicket' width={width} height={height} />
)
