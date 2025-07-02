import FooterChat from './FooterChat'
import HeaderChat from './HeaderChat'




const MainChat = () =>{

	return(
		<>
			<div className="mainChat">
				<HeaderChat></HeaderChat>
				<div className="mainChat_field"></div>
				<FooterChat />
			</div>
		</>
	)


}

export default MainChat