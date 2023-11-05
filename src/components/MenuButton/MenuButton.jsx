import MenuB from './MenuButton.styled';

function MenuButton() {
  return (
    <MenuB htmlFor="menu-check">
      <input id="menu-check" aria-hidden="true" type="checkbox" />
      <span />
    </MenuB>
  );
}

export default MenuButton;
