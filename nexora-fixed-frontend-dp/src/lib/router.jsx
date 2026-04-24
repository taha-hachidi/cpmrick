import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext({ path: '/', navigate: () => {} });

function normalizePath(path) {
  if (!path) return '/';
  const trimmed = path.split('?')[0].split('#')[0] || '/';
  return trimmed === '' ? '/' : trimmed;
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to) => {
    const next = normalizePath(to);
    if (next !== path) {
      window.history.pushState({}, '', next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setPath(next);
    }
  };

  const value = useMemo(() => ({ path, navigate }), [path]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, className, children, ...props }) {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export function NavLink({ to, className = '', children, ...props }) {
  const { path } = useRouter();
  const isActive = path === to;
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className;
  return (
    <Link to={to} className={resolvedClassName} aria-current={isActive ? 'page' : undefined} {...props}>
      {children}
    </Link>
  );
}
