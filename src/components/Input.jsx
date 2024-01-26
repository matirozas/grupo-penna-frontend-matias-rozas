// eslint-disable-next-line react/prop-types
export default function Input({ placeholder, type, name, value, onChange }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <input
          style={{
            height: 30,
            width: 600,
            borderColor: '#006c5e',
            borderStyle: 'solid',
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            margin: 8,
          }}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      </div>
    </div>
  );
}
