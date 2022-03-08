/*  
Move a Rigid Body by applying forces

Uriel Aguilar
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RBMotion : MonoBehaviour
{
    [SerializeField] float force;
    Rigidbody2D rb2D;
    Vector3 move;
    // Start is called before the first frame update
    void Start()
    {
        rb2D = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        move.x = Input.GetAxis("Vertical") * force;

        rb2D.AddForce(move);
    }
}
