import axios, {
    AxiosResponse, 
    AxiosError} from "../../node_modules/axios/index";

    
    interface ICar {
        model:string;
        vendor:string;
        price:number;
    }

    let divElement : HTMLDivElement = <HTMLDivElement>document.getElementById("content");
    let getAllCarsButton : HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllBtn");
    getAllCarsButton.addEventListener("click", showAllCars);

    function showAllCars():void{

        let uri : string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars23";

        axios.get<ICar[]>(uri)
        .then(function (response:AxiosResponse<ICar[]>):void{

            let result : string = "<ol>";
            response.data.forEach((car : ICar) => {
                result += "<li>" + "Model: " + car.model + " Vendor: " + car.vendor + " Price: " + car.price.toString() + "</li>"
            });

            result += "</ol>";

            divElement.innerHTML = result;
        }
        )
        .catch(function (error : AxiosError): void{

                divElement.innerHTML = error.message;            
        })
    }
