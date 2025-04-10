import { TProduct, TCategory, ECategories } from "../domain/product/Product"
import Images from "../Images"

export const Products: TProduct[] = [
    {id:1,category: ECategories.EXTRACTS,name:'Какой то текст с описанием продукта, 470г',description:'tese',images:[Images.img11,Images.img12], price:100},
    {id:2,category: ECategories.EXTRACTS,name:'Какой то текст с описанием какого то другого продукта, 270г',description:'tese2',images:[Images.img21,Images.img22], price:200},
    {id:3,category: ECategories.EXTRACTS,name:'Какой то текст с описанием какого то другого продукта, 170г',description:'tese3',images:[Images.img11,Images.img12], price:250},
    {id:4,category: ECategories.EXTRACTS,name:'Какой то текст с описанием какого то другого продукта, 570г',description:'tese4',images:[Images.img21,Images.img22], price:50},
    {id:5,category: ECategories.SMART_WATER,name:'Какой то текст с описанием продукта, 470г',description:'tese',images:[Images.img11,Images.img12], price:10},
    {id:6,category: ECategories.NAPITKI,name:'Какой то текст с описанием какого то другого продукта, 270г',description:'tese2',images:[Images.img21,Images.img22], price:20},
    {id:7,category: ECategories.TEA,name:'Какой то текст с описанием какого то другого продукта, 170г',description:'tese3',images:[Images.img11,Images.img12], price:2510},
    {id:8,category: ECategories.COSMECTIK,name:'Какой то текст с описанием какого то другого продукта, 570г',description:'tese4',images:[Images.img21,Images.img22], price:510},
]

export const Categories: TCategory[] = [
    { id:ECategories.EXTRACTS, text:'Флюидные экстракты'},
    { id:ECategories.SMART_WATER, text:'Концентрат напитка «Умная вода»'},
    { id:ECategories.NAPITKI, text:'Концентраты безалкогольных напитков'},
    { id:ECategories.TEA, text:'Чайный напиток на основе черного или зеленого чая'},
    { id:ECategories.COSMECTIK, text:'Косметическая продукция'},
]

