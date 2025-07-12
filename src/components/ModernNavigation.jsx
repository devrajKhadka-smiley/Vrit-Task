import { useState, useRef, useEffect } from 'react';
import { Home, FileText, Grid3X3, Folder, User, ClipboardCheck } from 'lucide-react';
import styles from './ModernNavigation.module.css';

// List of navigation items
const navItems = [
  { id: 'home', label: 'Task 1', icon: ClipboardCheck },
  { id: 'documents', label: 'Task 2', icon: FileText },
  // { id: 'apps', label: 'Task 3', icon: Grid3X3 },
];

// Component function with props
export function ModernNavigation({ onChange }) {
  const [activeItem, setActiveItem] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    const activeButton = itemRefs.current[activeItem];
    if (activeButton && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setIndicatorStyle({
        width: buttonRect.width,
        height: buttonRect.height,
        transform: `translateX(${buttonRect.left - navRect.left - 8}px)`,
      });
    }
  }, [activeItem]);

  return (
    <nav ref={navRef} className={styles['modern-nav']}>
      <div className={styles['nav-indicator']} style={indicatorStyle}></div>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeItem === item.id;

        return (
          <button
            key={item.id}
            ref={(el) => (itemRefs.current[item.id] = el)}
            onClick={() => {
              setActiveItem(item.id);
              onChange(item.id);
            }}
            className={`${styles['nav-item']} ${isActive ? styles.active : ''}`}
            aria-label={item.label}
          >
            <Icon className={styles['nav-icon']} />
            <span className={styles['nav-label']}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
