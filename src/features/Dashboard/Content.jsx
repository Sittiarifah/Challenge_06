import './Content.css';

const Content = () => {
    return (
        <div className="container py-4">
            <table id=" example" class="table table-striped">
                <tr>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td> 
                </tr>
            </table>
        </div>
    )
}

export default Content;