
/*
    Basic Motion affecting the transform of an object

    Uriel Aguilar
    2022-02-23
*/

using UnityEngine;

public class simpleMotion : MonoBehaviour
{   
    Vector3 move;
    //SerialField hace que aparezca en la pantalla de unity
    [SerializeField]float speed = 5f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // Read the input from keyboard or gamepad
        move.x = Input.GetAxis("Horizontal");
        move.y = Input.GetAxis("Vertical");

        //deltatime para ajustar al tiempo entre frames (tenga la misma velocidad en la misma maquina)
        transform.Translate(move * speed * Time.deltaTime);
    }
}
