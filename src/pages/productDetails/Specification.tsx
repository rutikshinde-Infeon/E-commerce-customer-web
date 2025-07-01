import './ProductDetails.scss';
interface SpecificationItem {
  label: string;
  value: string;
}

const specificationData: SpecificationItem[] = [
  { label: 'Sleeve Length', value: 'Long Sleeves' },
  { label: 'Type', value: 'Denim Jacket' },
  { label: 'Print or Pattern Type', value: 'Washed' },
  { label: 'Collar', value: 'Spread collar' },
  { label: 'Closure', value: 'Button' },
  { label: 'Number of Pockets', value: '4' },
  { label: 'Occasion', value: 'Casual' },
];

const Specification = () => {
  return (
    <div className='specifications-container'>
      <h2 className='specifications-title'>Specifications</h2>
      <div className='specifications-grid'>
        {specificationData.map((item, index) => (
          <div key={index} className='specification-item'>
            <p className='specification-label'>{item.label}</p>
            <p className='specification-value'>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specification;
