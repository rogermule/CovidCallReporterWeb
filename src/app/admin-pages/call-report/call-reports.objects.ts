import {Region} from "../settings/regions/regions.objects";
import {Zone} from "../settings/zones/zones.objects";
import {Wereda} from "../settings/weredas/weredas.objects";
import {City, Kebele, SubCity} from "../settings/Settings.Objects";
/**
 * Created by BENGEOS on 3/21/20.
 */
export class CallReport {
    public id: number;
    public region_id: number;
    public region: Region;
    public zone_id: number;
    public zone: Zone;
    public wereda_id: number;
    public wereda: Wereda;
    public city_id: number;
    public city: City;
    public sub_city_id: number;
    public sub_city: SubCity;
    public kebele_id: number;
    public kebele: Kebele;
    public age: number;
    public phone: string;
    public full_name: string;
    public occupation: number;
    public other: string;
    public gender: string;
    public report_type: string;
    public node: any;
    public rummer_types: any;
    public created_at: string;

    constructor() {
        this.id = null;
        this.region_id = null;
        this.gender = 'MALE';
    }
}

export class PaginatedCallReport {
    public data: CallReport[];
    public first_page_url: string;
    public last_page_url: string;
    public next_page_url: string;
    public prev_page_url: string;
    public path: string;
    public current_page: number;
    public per_page: number;
    public last_page: number;
    public total: number;
    public from: number;
    public to: number;

    constructor() {
        this.data = [];
        this.first_page_url = '';
        this.last_page_url = '';
        this.next_page_url = '';
        this.prev_page_url = '';
        this.path = '';
        this.current_page = 0;
        this.per_page = 0;
        this.last_page = 0;
        this.total = 0;
        this.from = 0;
        this.to = 0;
    }
}