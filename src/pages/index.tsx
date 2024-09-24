import "@style/pages/home.scss";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/Icon";

export default function HomePage() {
  const colors = ["primary", "secondary", "error", "warning"];
  const variants = ["filled", "outlined", "text", "tonal"];
  return (
    <main>
      <Card>
        {variants.map((variant, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "1em",
              marginBottom: "1em",
              alignItems: "center",
            }}
          >
            {variant === "icon"
              ? colors.map((color) => (
                  <Button
                    key={color}
                    icon="user"
                    color={color as ButtonUI.ButtonColors}
                  />
                ))
              : colors.map((color) => (
                  <Button
                    key={color}
                    variant={variant as ButtonUI.ButtonVariants}
                    color={color as ButtonUI.ButtonColors}
                  >
                    {color}
                  </Button>
                ))}
            <Button variant={variant as ButtonUI.ButtonVariants}>
              unstyled
            </Button>
          </div>
        ))}
      </Card>
      <Card>
        {variants.map((variant, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "1em",
              marginBottom: "1em",
              alignItems: "center",
            }}
          >
            {colors.map((color) => (
              <Button
                key={color}
                variant={variant as ButtonUI.ButtonVariants}
                color={color as ButtonUI.ButtonColors}
                icon
              >
                <Icon name="shield" />
              </Button>
            ))}
            <Button icon="user" />
          </div>
        ))}
      </Card>
    </main>
  );
}
