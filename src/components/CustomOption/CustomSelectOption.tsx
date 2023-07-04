const CustomSelectOption = ({ value, children, arrowSvg }) => (
  <option value={value}>
    {children}
    <span className='arrow-svg'>{arrowSvg}</span>
  </option>
);

export default CustomSelectOption;
