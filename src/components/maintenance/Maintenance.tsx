// import underConstructionImg from '../../assets/images/underConstruction.svg';
import './Maintenance.css';

const Maintenance = () => {
  return (
    <div className='overlay-container'>
      <div className='overlay-content'>
        <img
          // src={underConstructionImg}
          alt='Website Under Maintenance'
          className='maintenance-image'
        />
        <h1 className='overlay-message'>Website Under Maintenance</h1>
        <p className='overlay-description'>
          'We are currently performing scheduled maintenance. Please check back
          later.'
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
