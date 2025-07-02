import dots from '@icons/dots.svg'
import search from '@icons/search.svg'
import avatar from '@icons/avatar.png'


const HeaderChat = () =>{
return(
	<>
	<div className="headerChat">
			<div className="headerChat_profile">
				<div className="avatar">
					<img className='headerChat_profile__avatar' src={avatar}  alt="" />
				</div>
				<span className='headerChat_profile__name'>alex Plov</span>
			</div>
			<div className="headerChat_settings">
				<img src={dots} alt="" className="headerChat_settings__icons" />
				<img src={search} alt="" className="headerChat_settings__icons" />
			</div>
	</div>
	</>
)
}

export default HeaderChat