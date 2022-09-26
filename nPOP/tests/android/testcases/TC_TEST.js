import BasicFunction from "../Methods/BasicFunction";
import EvodMainScreen from "../Methods/EvodMainScreen";
import HomeScreen from "../Methods/HomeScreen";
import OpenApp from "../Methods/OpenApp";
import Sob from "../Methods/Sob";
import Svod from "../Methods/Svod";
import TrainDeparture from "../Methods/TrainDeparture";
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
    vehicleWagonorderBreakpercentage: "85",
    trainBreakingMode: "R+Mg"
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

    it('SVOD',async () => {
        await Svod.svod(e.vehicleWagonorderBreakpercentage, e.trainBreakingMode)
        await Svod.svodPrintClose()
    });

    it('SOB',async () => {
        await Sob.sob()
        await Sob.sobPrintClose()
    });

    it.only('Odchod vlaku',async () => {
        await TrainDeparture.trainDeparture()
    });
    
});
