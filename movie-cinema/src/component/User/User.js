import "./User.css";

const User = (props) => {
    const { nama, member, message } = props;
    const headerStyle = { textAlign: "center", fontWeight: "bold" };
    const cellStyle = { textAlign: "center", };
    const tableStyle = {
        border: "1px solid black",
        width: "300px",
        margin: "0 auto",
    };
    return (
        <div>
            <ul>
                <table className="card">
                    <thead className="card-head">
                        <tr>
                            <td colSpan={2}>{nama}</td>
                        </tr>
                    </thead>
                    <tbody className="card-body">
                        <tr>
                            <td colSpan={2}>{member}</td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={message}>Message</button>
                            </td>
                            <td>
                                <button onClick={message}>Subscribe</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </ul>
        </div>
    )
}

export default User;