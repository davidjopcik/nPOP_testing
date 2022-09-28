class EvodMainScreen {
    get mainEvodSelector(){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/cv_main_evod"]')
    }
    get trainLogOpenBtn(){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/ll_evod_trainlog"]')
    }
    get vehiclesAndDriversOpenBtn () {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/ll_evod_vehicles_and_drivers"]')
    }
    get svodOpenBtn() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/ll_evod_svod"]')
    }
    get sobOpenBtn() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/ll_evod_sob"]')
    }
    get trainDepartureSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/ll_evod_departure"]')
    } 
    get mainEvodSyncSelector(){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/cv_evod_sync"]')
    }

    async evodOpen(){
        await this.mainEvodSelector.click()
    }

    async trainLogOpenClick(){
        await (await this.trainLogOpenBtn).click()
    }

    async vehiclesAndDriversOpenClick(){
        await this.vehiclesAndDriversOpenBtn.click()
    }

    async svodOpenClick(){
        await this.svodOpenBtn.click()
    }

    async sobOpenClick(){
        await this.sobOpenBtn.click()
    }

    async trainDepartureClick(){
        await this.trainDepartureSelector.click()
    }

    async mainEvodSyncClick(){
        await this.mainEvodSyncSelector.click()
        if((await $('//*[@text="Naozaj si prajete spustiť synchronizáciu EVOD?"]')).isDisplayed()){
            await $('//*[@text="SPUSTIŤ SYNCHRONIZÁCIU"]').click()
        }
        await this.trainLogOpenBtn.waitForDisplayed({timeout: 60000})
    }

}
export default new EvodMainScreen