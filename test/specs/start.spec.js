describe('Primeiro Teste', () => {
    it('Acessar e Preencher o forms', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Módulo 16')
        await $('~Dropdown').click()
        const seletor = 'new UiSelector().text("This app is awesome").className("android.widget.CheckedTextView")'
        const botão = await $(android=$(seletor))
        await botão.click()
        await $('~button-Active').click()
        expect(await $('~android:id/button1')).toBeDisplayed()
    });
});