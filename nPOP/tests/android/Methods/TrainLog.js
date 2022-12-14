import Swipe from "./Swipe"

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
        await expect(this.trainLogOpenConfirm).toBeEnabled()
        await this.trainLogOpenConfirm.click()
    }

}

export default new TrainLog