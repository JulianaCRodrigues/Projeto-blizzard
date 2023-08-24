/* eslint-disable react/prop-types */
function ButtonComponents({ tabName, activeTab, fn, image }) {
  const isActive = tabName === activeTab;

  const handleClick = () => {
    fn(tabName);
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className={isActive ? 'active' : ''}
      >
        <img src={image} alt={image} /> 
      </button>
    </li>
  );
}

export default ButtonComponents;


