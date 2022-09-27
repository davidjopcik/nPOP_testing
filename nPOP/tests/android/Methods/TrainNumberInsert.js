export let trainNumberSelectionRouteDetailSelector 


class TrainNumberInsert {
    get trainNumberSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/et_login_trainselection_train_number"]')
    }
    get nasledSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/rl_item_spinner"]')
    }
    get dateSelector () {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/tv_layout_edittext_text"]')
    }
    get confirmBtn () {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/btn_login_train_selection_confirm"]')
    }
    

    async trainNumberInsert(trainNumber, nasled, date) {
        await this.trainNumberSelector.setValue(trainNumber)
        //await this.nasledSelector.setValue(nasled)
        await this.confirmBtn.click()
        await $('//*[@text="Trasa"]').waitForDisplayed()
    }
    async dateTrainRouteSelect(trainNumber){
        trainNumberSelectionRouteDetailSelector = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.TextView')
        console.log(await trainNumberSelectionRouteDetailSelector.getText());
        await expect(await trainNumberSelectionRouteDetailSelector.getText()).toContain(trainNumber)
        await trainNumberSelectionRouteDetailSelector.click()
    }


}

export default new TrainNumberInsert