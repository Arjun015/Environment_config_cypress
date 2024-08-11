


describe('Verify the functionality for uploadFile',function(){
    it('verify the functionality upload file',function(){
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html?filename=Screenshot+2022-05-12+174610.png')

        let image = "Screenshot.png"
        cy.get('#myFile').attachFile(image)
        cy.get('#submit-button').click()
        cy.url().should('contain',image)
    })

    it('verify the upload option',function(){
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        let img = "Screenshot.png"
        cy.get('#fileUpload').attachFile(img)
        cy.get('[class="filename"]').should('have.text',img)
    })

    it('verify the uploading file img',function(){
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/?submit-on-demand')
        let img = "Screenshot.png"
        cy.get('#file').attachFile(img)
        cy.get('label[for="file"]').should('have.text',img)
       
    })

    it.only('verify the uploading file img',function(){

        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')

        let img = "Screenshot.png"
        let img1 = "Screenshot.png"
        cy.get('#useSingleRequestCheck').click({force:true})
        cy.get('#igUpload1_ibb_fp').attachFile([img,img1])
        
        
    })
})