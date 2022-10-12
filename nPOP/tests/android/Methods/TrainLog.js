import Swipe from "./Swipe"
export let trainDataCurrent 
export let StationFrom
export let StationTo

class TrainLog {

    get openMainTrainlog(){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/main_train_log"]')
    }
    get trainChiefContact(){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/et_fragment_evod_train_chief_contact"]')
    }
    get trainLogOpenConfirm(){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/btn_evod_train_log_open_confirm"]')
    }

    async trainLogOpen(){
        await this.openMainTrainlog.waitForDisplayed()
        await this.openMainTrainlog.click()
        await this.trainChiefContact.waitForDisplayed()
        await this.trainChiefContact.setValue("+42191234567")
        await Swipe.swipeUpAllScreen()

        // ---- TO DO Push to array FromStation and To Station ---- 

        trainDataCurrent = {}
        let StationFromSelector = await $('android=new UiSelector().resourceId("sk.prosoft.ptt.pop:id/ll_item_textinfo_text").index(0).childSelector(new UiSelector().resourceId("sk.prosoft.ptt.pop:id/tv_item_textinfo_text"))') 
        StationFrom = await StationFromSelector.getText()

        let StationToSelector = await $('android=new UiSelector().resourceId("sk.prosoft.ptt.pop:id/ll_item_textinfo_text").index(3).childSelector(new UiSelector().resourceId("sk.prosoft.ptt.pop:id/tv_item_textinfo_text"))')
        StationTo = await StationToSelector.getText()

        trainDataCurrent.StationFrom = StationFrom
        trainDataCurrent.StationTo = StationTo

        console.log(await trainDataCurrent);

        await expect(this.trainLogOpenConfirm).toBeEnabled()
        await this.trainLogOpenConfirm.click()
    }

    async trainLogCancel(){

    }

}

export default new TrainLog