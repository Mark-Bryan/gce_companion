export function SimpleTextInput({ label, value, onChange }) {
    return (
        <input
            type="text"
            placeholder={label}
            value={value}
            onChange={e => onChange(e.target.value)}
            required
        />
    );
}

export function FreeTextInput({ label, value, onChange }) {
    return (
        <textarea
            placeholder={label}
            value={value}
            onChange={e => onChange(e.target.value)}
            required
        />
    );
}

export function DateTimeInput({ value, onChange }) {
    return (
        <input
            type="date"
            value={value}
            onChange={e => onChange(e.target.value)}
            required
        />
    );
}

export function DefaultInput({ label, value, onChange }) {
    return (
        <textarea
            placeholder={label + ' (defaulted to text)'}
            value={value}
            onChange={e => onChange(e.target.value)}
            required
        />
    );
}


export function NumberInput({ label, value, onChange }) {
    return (
        <input
            type="number"
            placeholder={label}
            value={value}
            onChange={e => onChange(e.target.value)}
            required
        />
    );
}

export function EmailInput({ label, value, onChange }) {
    return (
        <input
            type="email"
            placeholder={label}
            value={value}
            onChange={e => onChange(e.target.value)}
            required
        />
    );
}

export function RadioInput({ label, options, value, onChange }) {
    return (
        <div>
            <p>{label}</p>
            {options.map((option, index) => (
                <label key={index} style={{ marginRight: '10px' }}>
                    <input
                        type="radio"
                        value={option}
                        checked={value === option}
                        onChange={e => onChange(e.target.value)}
                        required
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}

export function CheckboxInput({ label, checked, onChange }) {
    return (
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
            />
            {label}
        </label>
    );
}

export function SelectInput({ label, options, value, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <select value={value} onChange={e => onChange(e.target.value)} required>
                <option value="">-- Select an option --</option>
                {options.map((option, index) => (
                    <option value={option} key={index}>{option}</option>
                ))}
            </select>
        </div>
    );
}
