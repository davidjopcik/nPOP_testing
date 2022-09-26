import Swipe from "./Swipe"
export let licenceEIN

class VehiclesAndDrivers {

    get addVehicle () {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/ll_addremove_selection_add"]')
    }
    get vehicleNumberInsert () {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/et_layout_edittext_vehicle"]')
    }
    get HKVType () {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/tv_item_spinner_text" and contains(@text, "Typ použitia HKV")]')
    } 
    get isDriverInVehicle () {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/sc_fragment_evod_vehicle_change_driver"]')
    } 
    get trainDriverInput() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/tv_layout_edittext_text" and contains(@text, "Rušňovodič")]')
    } 
    get trainDriverNumberSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/tv_layout_edittext_text" and contains(@text, "Osobné číslo")]')
    } 
    get trainDriverNumberInput() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/et_evod_input"]')
    } 
    get evodInputSave() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/btn_evod_input_save"]')
    } 
    get windowUpConfirm() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/iv_confirm"]')
    } 
    get licenceEINSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/et_evod_vehicle_driver_ein"]')
    } 
    get vehicleChangeConfirm() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/b_vehicle_change_confirm"]')
    } 
    get vehiclesAndDriversConfirmBtn() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/iv_addremove_selection_confirm"]')
    } 
    

    async addVehiclesAndDrivers(vehicles, HKVType, trainDriverNumber){

        //Zaradiť
        await expect(this.vehiclesAndDriversConfirmBtn).toBeDisabled()
        await this.addVehicle.click()
        await this.vehicleNumberInsert.setValue(vehicles)
        browser.touchPerform([{
            action: 'tap',
            options: {
                x: 640,
                y: 1115
            }
        }]);

        //Typ použitia HKV
        await this.HKVType.click()
        let selectHKVType = await $('//*[@text="' + HKVType + '"]')
        await selectHKVType.click()

        //Rušňovodič
        if(await trainDriverNumber !== (undefined || "")){
            if(!await this.isDriverInVehicle.isEnabled()){
                await this.isDriverInVehicle.click()
            }
            await expect(this.isDriverInVehicle).toBeEnabled()
            await Swipe.swipeUpAllScreen()
            await this.trainDriverInput.waitForDisplayed()
            await this.trainDriverInput.click()
            
            //Osobné číslo rušňovodiča
            await expect(this.windowUpConfirm).toBeDisabled()
            await this.trainDriverNumberSelector.click()
            await expect(this.evodInputSave).toBeDisabled()
            await this.trainDriverNumberInput.setValue(trainDriverNumber)
            await expect(this.evodInputSave).toBeEnabled()
            await this.evodInputSave.click()
            
            //Kontrola EIN licencie
            licenceEIN = await this.licenceEINSelector.getText()
            await expect(this.windowUpConfirm).toBeEnabled()
            await  this.windowUpConfirm.click()
            
            //Zaradenie rušňovodiča - HKV, POTVRDIŤ
            await expect($('android=new UiSelector().className("android.widget.LinearLayout").childSelector(new UiSelector().resourceId("sk.prosoft.ptt.pop:id/tv_layout_edittext_text").textContains("' + licenceEIN + '"))')).toBeDisplayed()
            while(!await this.vehicleChangeConfirm.isDisplayed()){
                await Swipe.swipeUpAllScreen()
            }
            await this.vehicleChangeConfirm.click()
            await expect(this.vehiclesAndDriversConfirmBtn).toBeEnabled()


            // Potvrdiť Vozidlá a rušňovodiči
            await this.vehiclesAndDriversConfirmBtn.click()


        }




    }

}

export default new VehiclesAndDrivers