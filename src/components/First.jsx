// eslint-disable-next-line react/prop-types
const First = ({ value, children })=>{
    return (
        <div>
            <h1>{value}</h1>
            <h3>{children}</h3>
        </div>
    )
};

export default First;