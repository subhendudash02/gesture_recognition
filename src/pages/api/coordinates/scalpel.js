import { supabase } from '@/utils/supabaseClient';

export default async function handler(req, res) {
    if (req.method == 'GET') {
        const { data, error } = await supabase.from('coordinates').select('*').eq('name', 'Scalpel');
       
        res.status(200).json({
            "status": "ok",
            "scalpel": {
                "x": data[0].x,
                "y": data[0].y
            }
        });
    }
}