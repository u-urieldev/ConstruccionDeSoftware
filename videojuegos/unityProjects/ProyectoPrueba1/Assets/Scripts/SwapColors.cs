/*
    Basic Motion affecting the transform of an object

    Uriel Aguilar
    2022-02-23
*/
using UnityEngine;
using System.Collections;

public class SwapColors : MonoBehaviour
{   
    public static SwapColors instance;

    // Traer la referencia del sprinte render
    SpriteRenderer renderer2d;
    
    private void Awake(){
        instance = this;
    }

    // Start is called before the first frame update
    void Start()
    {   
        // Get a reference to another component on this object
        renderer2d = GetComponent<SpriteRenderer>();
    }


    public IEnumerator alert(){
        Color newColor = renderer2d.color;
        newColor.a = 75;
        renderer2d.color = newColor;
        
        yield return new WaitForSeconds(0.1f);

        newColor.a = 0;
        renderer2d.color = newColor;
    }
}
