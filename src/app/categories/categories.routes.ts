import { Routes } from "@angular/router"
import { Categories } from "./categories"
import { Face } from "./face/face"
import { FacePrimer } from "./face-primer/face-primer"
import { Foundation } from "./foundation/foundation"
import { HairStyling } from "./hair-styling/hair-styling"
import { Highlighter } from "./highlighter/highlighter"
import { Lips } from "./lips/lips"
import { Skincare } from "./skincare/skincare"
import { Concealer } from "./concealer/concealer"

export const categoriesRoutes: Routes = [
    {
        path:'',
                component : Categories,
                children:[
                    {
                        path:'face',
                        component:Face
                    },
                    {
                        path:'face-primer',
                        component:FacePrimer
                    },
                    {
                        path:'foundation',
                        component:Foundation
                    },
                    {
                        path:'hair-styling',
                        component:HairStyling
                    },
                    {
                        path:'highlighter',
                        component:Highlighter
                    },
                    {
                        path:'lips',
                        component:Lips
                    },
                    {
                        path:'skincare',
                        component:Skincare
                    },
                    {
                        path:'concealer',
                        component:Concealer
                    },
                    {
                        path:'',
                        redirectTo:'face',
                        pathMatch:'full'
                    }
                ]
    }
]



