import { supabase } from '@/utils/supabaseClient';

export default async function coord(req, res) {
    if (req.method == 'GET') {
        const { data, error } = await supabase.from('coordinates').select('*');
        let ans = [];

        for (let i = 0; i < data.length; i++) {
            // ans[data[i].name] = {
            //     "x": data[i].x,
            //     "y": data[i].y
            // }
            ans.push(data[i].x);
            ans.push(data[i].y);
        }

        res.status(200).send(ans);
    }

    else if (req.method == 'POST') {
        const x_coord = req.body.x;
        const y_coord = req.body.y;

        const { error } = await supabase.from('coordinates').update({x : x_coord, y: y_coord}).eq('name', req.body.name);

        if (!error) {
            res.status(201).json({status: "updated"});
        }
        else {
            res.status(201).json({status: error});
        }
    }
}