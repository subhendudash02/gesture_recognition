import { supabase } from '@/utils/supabaseClient';

export default async function handler(req, res) {
    if (req.method == 'GET') {
        const { data, error } = await supabase.from('component_log').select('*');
        res.status(200).json({
            "finger": data[data.length - 1].finger
        });
    }
    else if (req.method == 'POST') {
        const { data, error } = await supabase.from('component_log').select('finger')
                            .order('id', { ascending: false }).limit(1);
    
        if (data[data.length - 1].finger != req.body.finger) {
            // Insert new component to component_log
            const { data, error } = await supabase.from('component_log').insert([
                { finger: req.body.finger }
            ]);
            res.status(201).json({status: !error ? "inserted" : error});
        }
        else {
            res.status(201).json({status: "ok", msg: "prev data entered already"});
        }
    }
}
