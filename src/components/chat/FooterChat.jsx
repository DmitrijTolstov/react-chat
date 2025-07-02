import smile from '@icons/smile.svg'
import voice from '@icons/audio.svg'
import attachment from '@icons/attachment.svg'
import send from '@icons/send.svg'

const FooterChat = () =>{


	return(
		<>
			<div className="footerChat">
				<div className="footerChat_icons">
						<img src={smile} alt="" />
					<img src={attachment} alt="" />
				</div>

				<div className="footerChat_input">
				<input type="text"  placeholder='Write a message' />
				<img className='voice' src={voice} alt="" />
				</div>
				<img src={send} alt="" />
			</div>
		</>
	)



}


export default FooterChat