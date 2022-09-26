class EvodMainScreen {
    get mainEvodSelector(){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/cv_main_evod"]')
    }
    get mainEvodSyncSelector(){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/cv_evod_sync"]')
    }

    async evodOpen(){
        await this.mainEvodSelector.click()
    }

    async mainEvodSyncClick(){
        await this.mainEvodSyncSelector.click()
        if((await $('//*[@text="Naozaj si prajete spustiť synchronizáciu EVOD?"]')).isDisplayed()){
            await $('//*[@text="SPUSTIŤ SYNCHRONIZÁCIU"]').click()
        }
    }

}
export default new EvodMainScreen