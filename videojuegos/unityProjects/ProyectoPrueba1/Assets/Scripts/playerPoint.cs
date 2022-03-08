/*

    UrielAguilar
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class playerPoint : MonoBehaviour
{   
    [SerializeField] int points;
    [SerializeField] Text pointsText;
    
    void OnCollisionEnter2D(Collision2D col)
    {   
        // Para que no de puntos chocando con el piso o la pared 
        // if (col.gameObject.tag == "Meta")
        //     points++;
        
    }
    
    void OnTriggerEnter2D(Collider2D col)
    {   
        //Destroy(col.gameObject);
        if(col.gameObject.tag == "Enemy"){
            if (points <= 0){
                points = 0;
            } else {
                points--;
                pointsText.text = points.ToString() + "/6";
                //scoreManager.instance.lessPoint();
            }
            StartCoroutine(SwapColors.instance.alert());
            
        }
        else if (col.gameObject.tag == "Coin"){
            Destroy(col.gameObject);
            points += 2;
            pointsText.text = points.ToString() + "/6";
            //scoreManager.instance.addPoints();
        }
    }   
}
