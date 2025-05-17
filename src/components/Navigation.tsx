import React from 'react';

interface LinkProps {
	to: string;
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '', onClick }) => {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();

		if (to.startsWith('/')) {
			window.history.pushState({}, '', to);
			window.dispatchEvent(new Event('popstate'));
		} else {
			const element = document.getElementById(to.replace('#', ''));
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}

		if (onClick) onClick();
	};

	return (
		<a href={to} className={className} onClick={handleClick}>
			{children}
		</a>
	);
};

interface RouterProps {
	children: React.ReactNode;
}

export const Router: React.FC<RouterProps> = ({ children }) => {
	const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

	React.useEffect(() => {
		const handleLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('popstate', handleLocationChange);

		return () => {
			window.removeEventListener('popstate', handleLocationChange);
		};
	}, []);

	return (
		<>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child) && child.type === Route) {
					if (child.props.path === currentPath) {
						return child.props.component;
					}
					return null;
				}
				return child;
			})}
		</>
	);
};

interface RouteProps {
	path: string;
	component: React.ReactNode;
}

export const Route: React.FC<RouteProps> = () => null;