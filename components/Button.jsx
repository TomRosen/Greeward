
export default function Button(props) {
    return (
        <button type="submit"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-brand hover:bg-black transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand">
            {props.text}
        </button>
    );
}
