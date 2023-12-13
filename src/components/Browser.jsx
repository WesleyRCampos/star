
const Browser = ({ endSearch, onChange }) => {

  return (


    <div className='Wrap-input'>
      <input className={endSearch !== '' ? 'has-val input' : 'input'}
        type="text"
        value={endSearch}
        onChange={onChange}
/>
      <span className='focus-input' data-placeholder='Nome'></span>
    </div>

  )
}

export default Browser
