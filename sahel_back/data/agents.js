module.exports = [
    { classes: 'active', iconClass: 'icon_house_alt', titre: 'Dashboard', subMenu: { isActive: false, event: e => alert('Dashbord') } },
    {
        classes: '', iconClass: 'fa fa-building', titre: 'Regroupement', subMenu: {
            isActive: true, values: [
                { titreSubMenu: 'Ajouter', event: 'addRegroupementEvents' },
                { titreSubMenu: 'Ajouter Membres', event: 'addMembresRegroupementEvents' },
                { titreSubMenu: 'Lister des Champs', event: 'listerChampsGroupementEvents' },
                { titreSubMenu: 'Lister des Membres', event: 'listerMembresGroupementEvents' },
                // { titreSubMenu: 'Lister', event: listerRegroupementEvents },
            ]
        }
    },
    {
        classes: '', iconClass: 'fa fa-users', titre: 'Membres', subMenu: {
            isActive: true, values: [
                { titreSubMenu: 'Ajouter', event: 'AddMembresEvents' },
                { titreSubMenu: 'Lister', event: 'listerMembreEvents' },
            ]
        }
    },
    {
        classes: '', iconClass: 'fa fa-users', titre: 'Agriculteur', subMenu: {
            isActive: true, values: [
                { titreSubMenu: 'Ajouter', event: 'addAgriculteurEvents' },
                { titreSubMenu: 'Ajouter Membre ', event: 'addMembreAgriculteurEvents' },
                { titreSubMenu: 'Lister Champs', event: 'listerChampsMemberEvents' },
                { titreSubMenu: 'Recolter', event: 'AddRecolteEvents' },
            ]
        }
    },
    {
        classes: '', iconClass: 'fa fa-users', titre: 'Charge', subMenu: {
            isActive: true, values: [
                // { titreSubMenu: 'Ajouter', event: 'addChargeEvents' },
                { titreSubMenu: 'Ajouter Charge Champs ', event: 'addChargeExploitEvents' },
                { titreSubMenu: 'Charge EXploitant ', event: 'listerChargeExploitantEvents' },
                //  { titreSubMenu: 'Liste Charge ', event: 'listerChargeEvents' },
            ]
        }
    },
    {
        classes: '', iconClass: 'fa fa-users', titre: 'Intrat', subMenu: {
            isActive: true, values: [
                // { titreSubMenu: 'Ajouter', event: 'AddIntratEvents' },
                { titreSubMenu: 'Ajouter Intrat Champs ', event: 'AddIntratChampsEvents' },
                { titreSubMenu: 'Intrat Exploitant ', event: 'listerIntratExploitantEvents' },
                //{ titreSubMenu: 'Liste Intrat ', event: ListerIntratEvents },
            ]
        }
    },
    {
        classes: '', iconClass: 'fa fa-users', titre: 'Equipement', subMenu: {
            isActive: true, values: [
                // { titreSubMenu: 'Ajouter', event: AddEquipementEvents },
                { titreSubMenu: 'Ajouter Intrat Champs ', event: 'AddEquipementChampsEvents' },
                { titreSubMenu: 'Equipement Exploitant ', event: 'listeEquipementExploitantEvents' },
                // { titreSubMenu: 'Liste Equipements ', event: ListerEquipementEvents },
            ]
        }
    },
    {
        classes: '', iconClass: 'fa fa-users', titre: 'Animaux Trait', subMenu: {
            isActive: true, values: [
                { titreSubMenu: 'Ajouter', event: 'AddAnimauxTraitEvents' },
                { titreSubMenu: 'Lister Aninaux Trait', event: 'listerAnimauxTraitMemberEvents' },
            ]
        }
    },
    {
        classes: '', iconClass: 'fa fa-users', titre: 'Commerce', subMenu: {
            isActive: true, values: [
                { titreSubMenu: 'Ajouter', event: 'AddCommercialisationEvents' },
                { titreSubMenu: 'Lister Par Circuit', event: 'ListerByCircuitEvent' },
                { titreSubMenu: 'Lister Par Produit', event: 'ListerByProduitEvent' },
            ]
        }
    },
    {
        classes: '', iconClass: 'fa fa-users', titre: 'Pret', subMenu: {
            isActive: true, values: [
                //  { titreSubMenu: 'Ajouter', event: AddPretEvents },
                { titreSubMenu: 'Lister', event: 'ListerPretEvents' },
                { titreSubMenu: 'Structure Pret', event: 'ListerPretStructureEvents' },
                { titreSubMenu: 'Membre Pret', event: 'ListerPretMembreEvents' },
            ]
        }
    },
];