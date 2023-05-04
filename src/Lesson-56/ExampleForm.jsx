import useForm from "./UseForm";

const ExampleForm = () => {
    const [formValue, handleChange] = useForm({
        name: "",
        email: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" name="name" value={formValue.value} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formValue.value} onChange={handleChange} />
                </label>
            </form>
        </div>
    )
}

export default ExampleForm