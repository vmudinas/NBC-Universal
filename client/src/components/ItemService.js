import axios from 'axios';

class ItemService {

    create(data) {
        console.log(data);
        axios.post('http://dummy.restapiexample.com/api/v1/create', {
            'name': data.employee_name,
            salary: data.employee_salary,
            age: data.employee_age
        })
            .then((response) => {
               window.location.reload();
          
        })
        .catch((error) => {
            console.log(error);
        });
    }

    update(data, id) {
        console.log("data");
        console.log(data);
        axios.put('http://dummy.restapiexample.com/api/v1/update/'+id, {
            'name': data.employee_name,
            salary: data.employee_salary,
            age: data.employee_age
        })
            .then((response) => {
                console.log("Updated");
                console.log(response.data);
                window.location.reload();
           
        })
        .catch((error) => {
            console.log(error)
        })
    }

    delete(id) {
        axios.delete('http://dummy.restapiexample.com/api/v1/delete/' + id)
        .then(() => {
            console.log('Deleted');
            window.location.reload();
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default ItemService;
