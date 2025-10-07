import { Link } from '@tanstack/react-router';
import { adminMenuSections } from '../model/model';
import * as s from './Sidebar.css';

export const Sidebar = () => {
	return (
		<aside className={s.sidebar}>
			<div className={s.sidebarHeader}>
				<img src="/kguLogo.svg" alt="로고" className={s.logoImage} />
			</div>

			<nav className={s.sidebarMenu}>
				{adminMenuSections.map(section => (
					<div key={section.title} className={s.menuSection}>
						<div className={s.sectionTitle}>{section.title}</div>
						<div className={s.sectionItems}>
							{section.items.map(item => (
								<div key={item.to} className={s.menuItem}>
									<Link 
										to={item.to}
									 	className={s.menuLink} 
									 	activeProps={{ className: s.active }}>
											{item.label}
									</Link>
								</div>
							))}
						</div>
					</div>
				))}
			</nav>
		</aside>
	);
};
