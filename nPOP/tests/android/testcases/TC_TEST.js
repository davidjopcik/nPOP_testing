import EvodMainScreen from "../Methods/EvodMainScreen";
import HomeScreen from "../Methods/HomeScreen";
import OpenApp from "../Methods/OpenApp";
import TrainLog from "../Methods/TrainLog";
import TrainNumberInsert from "../Methods/TrainNumberInsert";
import VehiclesAndDrivers from "../Methods/VehiclesAndDrivers";

export let Test_Data = {
    userName: "89",
    password: "Aa123456",
    role: "Sprievodca POP vo Vlaku",
    trainNumber: "612",
    vehicles: "955678120028",
    HKVType: "V - vlakové",
    trainDriverNumber: "1714",
}

let e = Test_Data

describe('TEST"', () => {

    it('Otvorenie app', async () => {
        await OpenApp.restarteApp()
    });

    it('Login',async () => {
        await HomeScreen.Login(e.userName, e.password, e.role)
    });

    it('Kmeňové č. vlaku a násled',async () => {
        await TrainNumberInsert.trainNumberInsert(e.trainNumber)
        await TrainNumberInsert.dateTrainRouteSelect(e.trainNumber)
        await EvodMainScreen.evodOpen()
    });

    it('Súpis vlaku',async () => {
        await TrainLog.trainLogOpen()
    });

    it('Vozidlá a rušňovodiči',async () => {
        await VehiclesAndDrivers.addVehiclesAndDrivers(e.vehicles, e.HKVType, e.trainDriverNumber)
    });
    
});
