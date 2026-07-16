import type { NavItem } from "./navbar.types";

interface MobileMenuProps {
  isOpen: boolean;
  menus: NavItem[];
  onClose: () => void;
}

function MobileMenu({ isOpen, menus, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed top-16 left-0 z-40 w-full overflow-hidden bg-black transition-all duration-300 md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div className="flex flex-col">
        {menus.map((menu) => (
          <a
            href={menu.href}
            key={menu.href}
            onClick={onClose}
            className="border-b border-white/10 px-6 py-4 text-white hover:bg-white/10"
          >
            {menu.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;
