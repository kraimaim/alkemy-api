const router = require('express').Router()

const { Character } = require('../../database/db')

router.get('/', async (req, res) => {
    
    const characters = await Character.findAll()
    res.json(characters)
    
})
//Buscar personaje por nombre
router.get('/:nombrePersonaje', async (req, res) => {
    const characters = await Character.findAll({where: { nombre: req.params.nombrePersonaje}})
    res.json(characters)
})



router.post('/', async (req,res) => {
    
    const character = await Character.create(req.body)
    res.json(character)
})

router.put('/:characterId', async (req, res) => {
   await Character.update(req.body, {
       where: { id: req.params.characterId}
   }) 
   res.json({ success: 'Se ha modificado'})
})

router.delete('/:characterId', async (req, res) => {
    await Character.destroy({
        where: { id: req.params.characterId}
    })
    res.json({ success: 'Se ha borrado el personaje' })
})

module.exports = router